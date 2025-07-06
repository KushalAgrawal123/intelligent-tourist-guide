from django.urls import path
from . import views

urlpatterns = [
    path('cities/', views.city_list),
    path('city-info/<str:city>/', views.city_info),
]
