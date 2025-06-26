from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .main import(calculate_compound_helicopter, calculate_multirotor, calculate_tiltrotor, calculate_tiltwing)

def home(request):
    return HttpResponse("Backend is running. Use /api/size/ to POST data.")


@csrf_exempt
def rotor_sizing_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

        config_type = data.get('config_type')
        if not config_type:
            return JsonResponse({'error': 'config_type is required'}, status=400)

        if config_type == "multirotor":
            results = calculate_multirotor(data)
        elif config_type == "tiltwing":
            results = calculate_tiltwing(data)
        elif config_type == "tiltrotor":
            results = calculate_tiltrotor(data)
        elif config_type == "compound":
            results = calculate_compound_helicopter(data)
        else:
            return JsonResponse({'error': 'Invalid config_type'}, status=400)

        return JsonResponse({'results': results})

    return HttpResponse("Rotor Sizing API. Send a POST request with config_type.")
