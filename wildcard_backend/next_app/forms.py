from django import forms  
from .models import  Menus
class MenusForm(forms.ModelForm):  
    class Meta:  
        model = Menus 
        fields = "__all__"  