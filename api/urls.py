from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet
from rest_framework.authtoken.views import obtain_auth_token
from . import views
import requests

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('profile/<str:server>/<str:pseudo>', views.profile),
    path('ranks/<str:server>/<str:summonerId>', views.ranks),
    path('masteries/<str:server>/<str:summonerId>', views.masteries),
]