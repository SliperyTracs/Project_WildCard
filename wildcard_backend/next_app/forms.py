from django import forms  
from .models import Menus
class MenusForm(forms.ModelForm):  
    name = forms.CharField(max_length=200)
    description = forms.CharField(max_length=200)
    vote = forms.IntegerField()
    class Meta:  
        model = Menus 
        fields = ('Name','Description','Votes')  