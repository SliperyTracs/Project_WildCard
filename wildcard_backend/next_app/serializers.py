
# import serializer from rest_framework
from rest_framework import serializers
 
# import model from models.py
from .models import *
 
#Menu serializer
class MenuSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = Menus
        fields = "__all__"
#Week serializer
class WeekSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = Week
        fields = "__all__"
#Poll serializer
class PollSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = Poll
        fields = "__all__"
#Votes serializer
class VotesSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = Votes
        fields = "__all__"
#Selection serializer
class SelectionSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = Selection
        fields = "__all__"