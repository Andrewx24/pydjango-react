from django.contrib import admin
from django.urls import path, include
from api.views import home  # Import the view for the root URL
from rest_framework.routers import DefaultRouter
from api.views import ItemViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', home),  # Add this line for the root URL
]
