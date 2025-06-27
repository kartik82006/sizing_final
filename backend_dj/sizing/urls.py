from django.urls import path
from .views import rotor_sizing_api, home

urlpatterns = [
    path('api/size/', rotor_sizing_api, name='rotor-sizing'),
    path('', home, name='home'),
]
