from django.db import models 

class Menus(models.Model):  
    Name = models.CharField(max_length=200)  
    Description = models.CharField(max_length=255) 
    DateCreated=models.DateField(auto_now=True, null=True)
    class Meta:  
        db_table = "menus" 
class Week(models.Model):
    Week_no = models.IntegerField()
    DateCreated = models.DateField()
    class Meta:  
        db_table = "week" 
class Poll(models.Model):
    Poll_no = models.IntegerField()
    DateCreated = models.DateField()
    Week = models.ForeignKey(Week, on_delete=models.CASCADE)
    class Meta:  
        db_table = "poll"
class Votes(models.Model):
    Total_votes = models.IntegerField()
    Menus = models.ForeignKey(Menus, on_delete=models.CASCADE) 
    Poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    class Meta:  
        db_table = "votes"
class Selection(models.Model):
    Menus = models.ForeignKey(Menus, on_delete=models.CASCADE) 
    Poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    class Meta:  
        db_table = "selection" 