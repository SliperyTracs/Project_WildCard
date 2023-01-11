
# import serializer from rest_framework
from rest_framework import serializers
 
# import model from models.py
from .models import *
# import PasswordHasher()
from argon2 import PasswordHasher
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
#Admin serializer

class AdminSerializer(serializers.ModelSerializer):
    Password = serializers.CharField()

    def create(self, validated_data):
        # Hash the password before saving the user
        ph = PasswordHasher()
        hashed_password = ph.hash(validated_data['Password'])
        validated_data['Password'] = hashed_password
        return super().create(validated_data)
    class Meta:
        model = Admin
        fields = '__all__'

   