from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ItemViewSet  # Import from 'api' instead of 'backend'

router = DefaultRouter()
router.register(r'items', ItemViewSet)  # Assuming 'ItemViewSet' is a viewset

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
