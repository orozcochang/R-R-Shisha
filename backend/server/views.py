from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view
import json
from .models import *
from django.core import serializers
from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder

# Create your views here.
def index(request):
    index_file= open('static/index.html').read()
    return HttpResponse(index_file)