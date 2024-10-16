from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Django and React project!")
