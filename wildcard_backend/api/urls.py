# basic URL Configurations
from django.urls import include, path, re_path
# import routers
from rest_framework import routers

# import everything from views
from .views import *
from . import views

 
# specify URL Path for rest_framework

from . import views 
 
urlpatterns = [ 
    re_path(r'^api/tutorials$', views.tutorial_list),
    re_path(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
    re_path(r'^api/tutorials/published$', views.tutorial_list_published)
]

