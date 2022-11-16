# basic URL Configurations
from django.urls import include, path
# import routers
from rest_framework import routers

# import everything from views
from .views import *
from . import views

 
# specify URL Path for rest_framework
urlpatterns = [
    path("", index, name="index"),

]


