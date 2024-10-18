from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer
from django.http import JsonResponse, HttpResponse

# Django REST framework viewset
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

# Basic Django views
def home(request):
    return HttpResponse("Welcome to the Django and React project!")

def some_view(request):
    data = {"someField": "Some Value"}
    return JsonResponse(data)  # Correct way to return JSON
