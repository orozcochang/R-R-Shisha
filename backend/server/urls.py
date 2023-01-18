from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', views.index),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]