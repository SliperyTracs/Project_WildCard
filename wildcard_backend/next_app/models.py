from django.db import models 

class Menus(models.Model):  
    Name = models.CharField(max_length=200)  
    Description = models.CharField(max_length=255) 
    Votes = models.IntegerField()
    dateCreated=models.DateField(auto_now=True)
    class Meta:  
        db_table = "menus"  