from django.db import models 

class Menus(models.Model):  
    Name = models.CharField(max_length=200)  
    Cusine = models.CharField(max_length=255) 
    Halal = models.BooleanField(default=False)
    DateCreated=models.DateField(auto_now=True, null=True)
    Image = models.CharField(max_length=255, null=True)
    class Meta:  
        db_table = "menus" 
class Week(models.Model):
    Week_no = models.IntegerField()
    DateCreated = models.DateField(auto_now=True, null=True)
    class Meta:  
        db_table = "week" 
class Poll(models.Model):
    StartDate = models.DateField(null=True)
    EndDate = models.DateField(null=True)
    DateCreated = models.DateField(auto_now=True, null=True)
    Week = models.ForeignKey(Week, on_delete=models.CASCADE)
    class Meta:  
        db_table = "poll"
class Votes(models.Model):
    Votes = models.IntegerField()
    Menus = models.ForeignKey(Menus, on_delete=models.CASCADE) 
    Poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    class Meta:  
        db_table = "votes"
class Selection(models.Model):
    Menus = models.ForeignKey(Menus, on_delete=models.CASCADE) 
    Poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    class Meta:  
        db_table = "selection" 
class Admin(models.Model):
    Username = models.CharField(max_length=255, null=True)
    Email = models.EmailField()
    Password = models.CharField(max_length=255)
    class Meta:
        db_table = "Admin"