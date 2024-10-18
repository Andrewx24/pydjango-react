from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer
from django.http import JsonResponse, HttpResponse
import json
from datetime import datetime
import logging
# Django REST framework viewset
logger = logging.getLogger(__name__)
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

# Basic Django views
def home(request):
    return HttpResponse("Welcome to the Django and React project!")

def some_view(request):
    data = {"someField": "Some Value"}
    return JsonResponse(data)  # Correct way to return JSON

def calculate_age(request):
    if request.method == 'POST':
        try:
            logger.info("Request body: %s", request.body)  # Log the request body
            data = json.loads(request.body)
            dob_str = data.get('dob')
            logger.info("Received dob: %s", dob_str)  # Log the dob

            # Convert string to a date object
            dob = datetime.strptime(dob_str, '%Y-%m-%d').date()
            logger.info("DOB after parsing: %s", dob)

            # Calculate age
            today = datetime.today().date()
            age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
            logger.info("Calculated age: %s", age)

            return JsonResponse({'age': age})
        except Exception as e:
            logger.error("Error in calculate_age: %s", e)  # Log the exception
            return JsonResponse({'message': 'Invalid date format or other error.'}, status=400)
    else:
        return JsonResponse({'message': 'Only POST requests are allowed.'}, status=405)
    