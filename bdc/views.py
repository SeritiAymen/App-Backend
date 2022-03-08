from django.shortcuts import render
from .serializers import BdcSerializer
from rest_framework import viewsets
from django.http import HttpResponse
from .models import Bdc

# Create your views here.
class BdcView(viewsets.ModelViewSet):
    serializer_class = BdcSerializer
    queryset = Bdc.objects.all()
