from django.shortcuts import redirect, render
from django_nextjs.render import render_nextjs_page_sync

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

from .serializers import *
from .models import *
models = {
    "menu" : Menus,
    "poll" : Poll,
    "week" : Week,
    "selection" : Selection,
    "votes" : Votes
}
serializers = {
    "menu" : MenuSerializer,
    "poll" : PollSerializer,
    "week" : WeekSerializer,
    "selection" : SelectionSerializer,
    "votes" : VotesSerializer
}
@csrf_exempt
def apiHttpResponse(request,Model):
    if request.method == 'GET':
        model = models[Model].objects.all()

        serializer = serializers[Model](model, many=True)
        return JsonResponse(serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        
        data = JSONParser().parse(request)
        serializer = serializers[Model](data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = models[Model].objects.all().delete()
        return JsonResponse({'message':'{} Models were deleted successfully'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def apiDetails(request,Model, pk):
    try: 
        model = models[Model].objects.get(pk=pk) 
    except models[Model].DoesNotExist: 
        return JsonResponse({'message': 'The model does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        serializer = serializers[Model](model)
        return JsonResponse(serializer.data)
 
    elif request.method == 'PUT': 
        data = JSONParser().parse(request) 
        serializer = serializers[Model](model, data=data) 
        if serializer.is_valid(): 
            serializer.save() 
            return JsonResponse(serializer.data) 
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        model.delete() 
        return JsonResponse({'message': 'Model was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

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
@api_view(['GET', 'PUT', 'DELETE'])
def MenuDetail(request, pk):
    try: 
        menus = Menus.objects.get(pk=pk) 
    except Menus.DoesNotExist: 
        return JsonResponse({'message': 'The menu does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET':
        menus_serializer = MenuSerializer(menus)
        return JsonResponse(menus_serializer.data)
        # 'safe=False' for objects serialization

    elif request.method == 'PUT':
        menu_data = JSONParser().parse(request)
        menus_serializer = MenuSerializer(data=menu_data)
        if menus_serializer.is_valid():
            menus_serializer.save()
            return JsonResponse(menus_serializer.data)
        return JsonResponse(menus_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Menus.objects.all().delete()
        return JsonResponse({'message':'{} Menus were deleted successfully'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

def index(request):
    return render_nextjs_page_sync(request)