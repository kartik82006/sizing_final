import math

def extract_common_inputs(data):
    return (
        int(data['no_of_rotor']),
        int(data['no_of_blade']), 
        float(data['disk_loading']),
        float(data['gtow']),
        float(data['solidity']),
        float(data['power_factor']),
        float(data['drag_area']),
        float(data['cl']),
        float(data['cd']),
        float(data['cd_profile']),
        float(data['ct']),
        float(data['cp']),
        float(data['induced_power_factor']),
        float(data['v_hover']),
        float(data['rate_of_climb']),
        float(data['v_tip']),
        float(data['rho']),
        float(data['aspect_ratio']),

    )

def generate_result(
    radius, swept_area, mean_chord_length,
    thrust_per_rotor, shaft_tilt_angle, drag_climb, drag_hover, drag_cruise,
    lift_climb, lift_hover, lift_cruise, v_downwash,
    vertical_balance, horizontal_balance, induced_power, drag_power, profile_power, total_power, hover_power,
    v_hover, v_cruise, v_stall, angular_speed, thrust_available,
    advanced_ratio, inflow_ratio, rpm, reynolds_number):

    return {
        "radius": round(radius, 3),
        "swept_area": round(swept_area, 3),
        "mean_chord_length": round(mean_chord_length, 3),
        "thrust_per_rotor": round(thrust_per_rotor, 3),
        "shaft_tilt_angle_deg": round(math.degrees(shaft_tilt_angle), 2),
        
        # Drag Forces
        "drag_climb": round(drag_climb, 3),
        "drag_hover": round(drag_hover, 3),
        "drag_cruise": round(drag_cruise, 3),
        
        # Lift Forces
        "lift_climb": round(lift_climb, 3),
        "lift_hover": round(lift_hover, 3),
        "lift_cruise": round(lift_cruise, 3),
        
        # Balance Conditions
        "vertical_balance": round(vertical_balance, 3),
        "horizontal_balance": round(horizontal_balance, 3),
        
        # Velocity & Motion
        "v_downwash": round(v_downwash, 3),
        "v_hover": round(v_hover, 3),
        "v_cruise": round(v_cruise, 3),
        "v_stall": round(v_stall, 3),
        "angular_speed": round(angular_speed, 3),
        "rpm": round(rpm, 1),
        
        # Thrust & Power
        "thrust_available": round(thrust_available, 3),
        "induced_power": round(induced_power, 3),
        "drag_power": round(drag_power, 3),
        "profile_power": round(profile_power, 3),
        "hover_power": round(hover_power, 3),
        "total_power": round(total_power, 3),
        
        # Ratios
        "advanced_ratio": round(advanced_ratio, 4),
        "inflow_ratio": round(inflow_ratio, 4),
        
        # Reynolds Number
        "reynolds_number": round(reynolds_number, 0)
    }


def calculate_multirotor(data):
    (
        no_of_rotor, no_of_blade, disk_loading, gtow,
        solidity, power_factor, drag_area,
        cl, cd, cd_profile, ct, cp, induced_power_factor,
        v_hover, rate_of_climb, v_tip, rho
    ) = extract_common_inputs(data)


    radius = math.sqrt(gtow / (disk_loading * math.pi * no_of_rotor))
    swept_area = math.pi * radius ** 2
    mean_chord_length = (solidity * math.pi * radius) / no_of_blade
    thrust_per_rotor = gtow / no_of_rotor

    drag_hover = 0.5 * rho * v_hover ** 2 * cd * drag_area
    drag_climb = 0.5 * rho * rate_of_climb ** 2 * cd * drag_area
    shaft_tilt_angle = math.atan(drag_climb / gtow)

    lift_hover = 0.5 * rho * cl * swept_area * v_hover ** 2
    lift_climb = 0.5 * rho * cl * swept_area * rate_of_climb ** 2

    thrust_available = no_of_rotor * swept_area * 9.81 * disk_loading
    v_cruise = math.sqrt((2 * thrust_available) / (rho * cd * drag_area))
    drag_cruise = 0.5 * rho * v_cruise ** 2 * cd * drag_area
    lift_cruise = 0.5 * rho * swept_area * cl * v_cruise ** 2

    vertical_balance = thrust_per_rotor * no_of_rotor * math.cos(shaft_tilt_angle)
    horizontal_balance = thrust_per_rotor * no_of_rotor * math.sin(shaft_tilt_angle)

    advanced_ratio = (rate_of_climb * math.cos(shaft_tilt_angle)) / v_tip
    inflow_ratio = (v_cruise * math.sin(shaft_tilt_angle)) / v_tip

    induced_power = (
        power_factor * (ct ** 2) /
        (2 * math.sqrt(advanced_ratio ** 2 + inflow_ratio ** 2)) *
        (rho * swept_area * v_tip ** 3) / 1000
    )
    drag_power = (rho / 2000) * (advanced_ratio ** 3) * v_tip ** 3 * drag_area
    profile_power = (
        0.125 * solidity * cd_profile * (1 + 4.65 * advanced_ratio ** 2) *
        (rho * v_tip ** 3 * swept_area) / 1000
    )

    total_power = no_of_rotor * (induced_power + drag_power + profile_power)
    hover_power = ((gtow * cd * 9.81) ** 1.5) / (math.sqrt(2 * rho * no_of_rotor * swept_area) * 1000)

    v_stall = math.sqrt((2 * disk_loading * 9.81) / (rho * cl))
    angular_speed = v_tip / radius

    v_downwash= (0.5 * (math.sqrt((rate_of_climb*rate_of_climb) + ((2 * gtow) / (1.225 * swept_area)))) ) - rate_of_climb

    rpm= (60/6.28) * (v_tip/radius)

    reynolds_number = (v_cruise* mean_chord_length)/(1.55*0.00001)

    result = generate_result(radius, swept_area, mean_chord_length,
    thrust_per_rotor, shaft_tilt_angle, drag_climb, drag_hover, drag_cruise,
    lift_climb, lift_hover, lift_cruise, v_downwash,
    vertical_balance, horizontal_balance, induced_power, drag_power, profile_power, total_power, hover_power,
    v_hover, v_cruise, v_stall, angular_speed, thrust_available,
    advanced_ratio, inflow_ratio, rpm, reynolds_number)

    return [result]



def calculate_tiltwing(data):
    (
        no_of_rotor, no_of_blade, disk_loading, gtow,
        solidity, power_factor, drag_area,
        cl, cd, cd_profile, ct, cp, induced_power_factor,
        v_hover, rate_of_climb, v_tip, rho
    ) = extract_common_inputs(data)


    radius = math.sqrt(gtow / (disk_loading * math.pi * no_of_rotor))
    swept_area = math.pi * radius ** 2
    mean_chord_length = (solidity * math.pi * radius) / no_of_blade
    thrust_per_rotor = gtow / no_of_rotor

    drag_hover = 0.5 * rho * v_hover ** 2 * cd * drag_area
    drag_climb = 0.5 * rho * rate_of_climb ** 2 * cd * drag_area
    shaft_tilt_angle = math.atan(drag_climb / gtow)

    lift_hover = 0.5 * rho * cl * swept_area * v_hover ** 2
    lift_climb = 0.5 * rho * cl * swept_area * rate_of_climb ** 2

    thrust_available = no_of_rotor * swept_area * 9.81 * disk_loading
    v_cruise = math.sqrt((2 * thrust_available) / (rho * cd * drag_area))
    drag_cruise = 0.5 * rho * v_cruise ** 2 * cd * drag_area
    lift_cruise = 0.5 * rho * swept_area * cl * v_cruise ** 2

    vertical_balance = thrust_per_rotor * no_of_rotor * math.cos(shaft_tilt_angle)
    horizontal_balance = thrust_per_rotor * no_of_rotor * math.sin(shaft_tilt_angle)

    advanced_ratio = (rate_of_climb * math.cos(shaft_tilt_angle)) / v_tip
    inflow_ratio = (v_cruise * math.sin(shaft_tilt_angle)) / v_tip

    induced_power = (gtow/v_cruise) * (2*gtow*)
    drag_power = (rho / 2000) * (advanced_ratio ** 3) * v_tip ** 3 * drag_area
    profile_power = (
        0.125 * solidity * cd_profile * (1 + 4.65 * advanced_ratio ** 2) *
        (rho * v_tip ** 3 * swept_area) / 1000
    )

    total_power = no_of_rotor * (induced_power + drag_power + profile_power)
    hover_power = ((gtow * cd * 9.81) ** 1.5) / (math.sqrt(2 * rho * no_of_rotor * swept_area) * 1000)

    v_stall = math.sqrt((2 * disk_loading * 9.81) / (rho * cl))
    angular_speed = v_tip / radius

    v_downwash=  (0.5 * (math.sqrt((rate_of_climb*rate_of_climb) + ((2 * gtow) / (1.225 * swept_area)))) ) - rate_of_climb

    rpm= (60/6.28) * (v_tip/radius)

    reynolds_number = (v_cruise* mean_chord_length)/(1.55*0.00001)

    result = generate_result(radius, swept_area, mean_chord_length,
    thrust_per_rotor, shaft_tilt_angle, drag_climb, drag_hover, drag_cruise,
    lift_climb, lift_hover, lift_cruise, v_downwash,
    vertical_balance, horizontal_balance, induced_power, drag_power, profile_power, total_power, hover_power,
    v_hover, v_cruise, v_stall, angular_speed, thrust_available,
    advanced_ratio, inflow_ratio, rpm, reynolds_number)

    return [result]


def calculate_tiltrotor(data):
    (
        no_of_rotor, no_of_blade, disk_loading, gtow,
        solidity, power_factor, drag_area,
        cl, cd, cd_profile, ct, cp, induced_power_factor,
        v_hover, rate_of_climb, v_tip, rho
    ) = extract_common_inputs(data)


    radius = math.sqrt(gtow / (disk_loading * math.pi * no_of_rotor))
    swept_area = math.pi * radius ** 2
    mean_chord_length = (solidity * math.pi * radius) / no_of_blade
    thrust_per_rotor = gtow / no_of_rotor

    drag_hover = 0.5 * rho * v_hover ** 2 * cd * drag_area
    drag_climb = 0.5 * rho * rate_of_climb ** 2 * cd * drag_area
    shaft_tilt_angle = math.atan(drag_climb / gtow)

    lift_hover = 0.5 * rho * cl * swept_area * v_hover ** 2
    lift_climb = 0.5 * rho * cl * swept_area * rate_of_climb ** 2

    thrust_available = no_of_rotor * swept_area * 9.81 * disk_loading
    v_cruise = math.sqrt((2 * thrust_available) / (rho * cd * drag_area))
    drag_cruise = 0.5 * rho * v_cruise ** 2 * cd * drag_area
    lift_cruise = 0.5 * rho * swept_area * cl * v_cruise ** 2

    vertical_balance = thrust_per_rotor * no_of_rotor * math.cos(shaft_tilt_angle)
    horizontal_balance = thrust_per_rotor * no_of_rotor * math.sin(shaft_tilt_angle)

    advanced_ratio = (rate_of_climb * math.cos(shaft_tilt_angle)) / v_tip
    inflow_ratio = (v_cruise * math.sin(shaft_tilt_angle)) / v_tip

    induced_power = (1/8)*

    drag_power = (rho / 2000) * (advanced_ratio ** 3) * v_tip ** 3 * drag_area
    profile_power = (
        0.125 * solidity * cd_profile * (1 + 4.65 * advanced_ratio ** 2) *
        (rho * v_tip ** 3 * swept_area) / 1000
    )

    total_power = no_of_rotor * (induced_power + drag_power + profile_power)
    hover_power = ((gtow * cd * 9.81) ** 1.5) / (math.sqrt(2 * rho * no_of_rotor * swept_area) * 1000)

    v_stall = math.sqrt((2 * disk_loading * 9.81) / (rho * cl))
    angular_speed = v_tip / radius

    v_downwash=  (0.5 * (math.sqrt((rate_of_climb*rate_of_climb) + ((2 * gtow) / (1.225 * swept_area)))) ) - rate_of_climb

    rpm= (60/6.28) * (v_tip/radius)

    reynolds_number = (v_cruise* mean_chord_length)/(1.55*0.00001)

    result = generate_result(radius, swept_area, mean_chord_length,
    thrust_per_rotor, shaft_tilt_angle, drag_climb, drag_hover, drag_cruise,
    lift_climb, lift_hover, lift_cruise, v_downwash,
    vertical_balance, horizontal_balance, induced_power, drag_power, profile_power, total_power, hover_power,
    v_hover, v_cruise, v_stall, angular_speed, thrust_available,
    advanced_ratio, inflow_ratio, rpm, reynolds_number)

    return [result]


def calculate_compound_helicopter(data):
    (
        no_of_rotor, no_of_blade, disk_loading, gtow,
        solidity, power_factor, drag_area,
        cl, cd, cd_profile, ct, cp, induced_power_factor,
        v_hover, rate_of_climb, v_tip, rho
    ) = extract_common_inputs(data)


    radius = math.sqrt(gtow / (disk_loading * math.pi * no_of_rotor))
    swept_area = math.pi * radius ** 2
    mean_chord_length = (solidity * math.pi * radius) / no_of_blade
    thrust_per_rotor = gtow / no_of_rotor

    drag_hover = 0.5 * rho * v_hover ** 2 * cd * drag_area
    drag_climb = 0.5 * rho * rate_of_climb ** 2 * cd * drag_area
    shaft_tilt_angle = math.atan(drag_climb / gtow)

    lift_hover = 0.5 * rho * cl * swept_area * v_hover ** 2
    lift_climb = 0.5 * rho * cl * swept_area * rate_of_climb ** 2

    thrust_available = no_of_rotor * swept_area * 9.81 * disk_loading
    v_cruise = math.sqrt((2 * thrust_available) / (rho * cd * drag_area))
    drag_cruise = 0.5 * rho * v_cruise ** 2 * cd * drag_area
    lift_cruise = 0.5 * rho * swept_area * cl * v_cruise ** 2

    vertical_balance = thrust_per_rotor * no_of_rotor * math.cos(shaft_tilt_angle)
    horizontal_balance = thrust_per_rotor * no_of_rotor * math.sin(shaft_tilt_angle)

    advanced_ratio = (rate_of_climb * math.cos(shaft_tilt_angle)) / v_tip
    inflow_ratio = (v_cruise * math.sin(shaft_tilt_angle)) / v_tip

    induced_power = (
        power_factor * (ct ** 2) /
        (2 * math.sqrt(advanced_ratio ** 2 + inflow_ratio ** 2)) *
        (rho * swept_area * v_tip ** 3) / 1000
    )
    drag_power = (rho / 2000) * (advanced_ratio ** 3) * v_tip ** 3 * drag_area
    profile_power = (
        0.125 * solidity * cd_profile * (1 + 4.65 * advanced_ratio ** 2) *
        (rho * v_tip ** 3 * swept_area) / 1000
    )

    total_power = no_of_rotor * (induced_power + drag_power + profile_power)
    hover_power = ((gtow * cd * 9.81) ** 1.5) / (math.sqrt(2 * rho * no_of_rotor * swept_area) * 1000)

    v_stall = math.sqrt((2 * disk_loading * 9.81) / (rho * cl))
    angular_speed = v_tip / radius

    v_downwash=  (0.5 * (math.sqrt((rate_of_climb*rate_of_climb) + ((2 * gtow) / (1.225 * swept_area)))) ) - rate_of_climb

    rpm= (60/6.28) * (v_tip/radius)

    reynolds_number = (v_cruise* mean_chord_length)/(1.55*0.00001)

    result = generate_result(radius, swept_area, mean_chord_length,
    thrust_per_rotor, shaft_tilt_angle, drag_climb, drag_hover, drag_cruise,
    lift_climb, lift_hover, lift_cruise, v_downwash,
    vertical_balance, horizontal_balance, induced_power, drag_power, profile_power, total_power, hover_power,
    v_hover, v_cruise, v_stall, angular_speed, thrust_available,
    advanced_ratio, inflow_ratio, rpm, reynolds_number)

    return [result]
