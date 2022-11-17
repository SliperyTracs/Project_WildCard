from django.shortcuts import redirect, render
from django_nextjs.render import render_nextjs_page_sync

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view

from .serializers import *
from .models import *

@api_view(['GET', 'POST', 'DELETE'])
# Create your views here.  
def MenuHttpResponse(request):
    if request.method == 'GET':
        menus = Menus.objects.all()

        name = request.query_params.get('name',None)
        if name is not None:
            menus = menus.filter(name_icontains=name)

        menus_serializer = MenuSerializer(menus, many=True)
        return JsonResponse(menus_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        menu_data = JSONParser().parse(request)
        menus_serializer = MenuSerializer(data=menu_data)
        if menus_serializer.is_valid():
            menus_serializer.save()
            return JsonResponse(menus_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(menus_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Menus.objects.all().delete()
        return JsonResponse({'message':'{} Menus were deleted successfully'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

def index(request):
    return render_nextjs_page_sync(request)