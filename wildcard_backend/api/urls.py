# basic URL Configurations
from django.urls import include, path
# import routers
from rest_framework import routers

# import everything from views
from .views import *
from . import views

 
# specify URL Path for rest_framework
urlpatterns = [
    path('emp', emp),  
    path('show',show),  
    path('edit/<int:id>', edit),  
    path('update/<int:id>', update),  
    path('delete/<int:id>', destroy),  
]