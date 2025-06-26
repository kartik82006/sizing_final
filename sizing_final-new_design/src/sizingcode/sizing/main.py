import math

def calculate_rotor_sizing(no_of_rotor, blade_options, disk_loading, gtow,
                           solidity, power_factor, interference_coefficient, drag_area,
                           cl, cd, cd_profile, ct, cp, induced_power_factor,
                           v_hover, rate_of_climb, v_tip, rho):

    results = []

    for no_of_blade in blade_options:
        radius = math.sqrt(gtow / (disk_loading * math.pi * no_of_rotor))
        swept_area = math.pi * radius ** 2
        mean_chord_length = (solidity * math.pi * radius) / no_of_blade
        thrust_per_rotor = (gtow * interference_coefficient) / no_of_rotor

        drag_climb = 0.5 * rho * rate_of_climb ** 2 * cd * drag_area
        drag_hover = 0.5 * rho * v_hover ** 2 * cd * drag_area
        shaft_tilt_angle = math.atan(drag_climb / gtow)

        lift_climb = 0.5 * rho * cl * swept_area * rate_of_climb ** 2
        lift_hover = 0.5 * rho * cl * v_hover ** 2 * swept_area

        thrust_available = no_of_rotor * swept_area * 9.81 * disk_loading
        v_cruise = math.sqrt((2 * thrust_available) / (rho * cd * drag_area))
        drag_cruise = 0.5 * rho * v_cruise ** 2 * cd * drag_area
        lift_cruise = 0.5 * rho * swept_area * cl * v_cruise ** 2

        vertical_balance = 0.5 * no_of_rotor * thrust_per_rotor * math.cos(shaft_tilt_angle)
        horizontal_balance = 0.5 * thrust_per_rotor * no_of_rotor * math.sin(shaft_tilt_angle)

        advanced_ratio = (rate_of_climb * math.cos(shaft_tilt_angle)) / v_tip
        inflow_ratio = (v_cruise * math.sin(shaft_tilt_angle)) / v_tip

        induced_power = (
            power_factor *
            ((ct ** 2) / (2 * math.sqrt(advanced_ratio ** 2 + inflow_ratio ** 2))) *
            (rho * swept_area * v_tip ** 3 / 1000)
        )
        drag_power = (rho / 2000) * (advanced_ratio ** 3) * (v_tip ** 3) * drag_area
        profile_power = (
            0.125 * solidity * cd_profile * (1 + 4.65 * advanced_ratio ** 2) *
            (rho * v_tip ** 3 * swept_area) / 1000
        )

        total_power = no_of_rotor * (induced_power + drag_power + profile_power)
        hover_power = ((gtow * cd * 9.81) ** 1.5) / (math.sqrt(2 * rho * no_of_rotor * swept_area) * 1000)

        v_stall = math.sqrt((2 * disk_loading * 9.81) / (rho * cl))
        angular_speed = v_tip / radius

        result = {
            "no_of_blade": no_of_blade,
            "radius": round(radius, 3),
            "swept_area": round(swept_area, 3),
            "mean_chord_length": round(mean_chord_length, 3),
            "thrust_per_rotor": round(thrust_per_rotor, 3),
            "drag_climb": round(drag_climb, 3),
            "drag_hover": round(drag_hover, 3),
            "drag_cruise": round(drag_cruise, 3),
            "lift_climb": round(lift_climb, 3),
            "lift_hover": round(lift_hover, 3),
            "lift_cruise": round(lift_cruise, 3),
            "shaft_tilt_angle_deg": round(math.degrees(shaft_tilt_angle), 2),
            "vertical_balance": round(vertical_balance, 3),
            "horizontal_balance": round(horizontal_balance, 3),
            "advanced_ratio": round(advanced_ratio, 4),
            "inflow_ratio": round(inflow_ratio, 4),
            "induced_power": round(induced_power, 3),
            "drag_power": round(drag_power, 3),
            "profile_power": round(profile_power, 3),
            "total_power": round(total_power, 3),
            "hover_power": round(hover_power, 3),
            "v_cruise": round(v_cruise, 3),
            "v_stall": round(v_stall, 3),
            "angular_speed": round(angular_speed, 3)
        }

        results.append(result)

    return results