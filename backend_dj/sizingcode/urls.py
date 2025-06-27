from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('sizing.urls')),  # change 'sizing' to your app name
]
