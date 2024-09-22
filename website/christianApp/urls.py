from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('christianApp.urls')),
    path('admin/', admin.site.urls),
]
