from django.urls import path
from api import views


urlpatterns = [
    path('', views.home, name='home'),
    path('api/some-endpoint/', views.some_view, name='some-endpoint'),
    path('api/calculate-age/', views.calculate_age, name='calculate-age'),
]
