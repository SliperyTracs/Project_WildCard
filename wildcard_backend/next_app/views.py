from django.shortcuts import render, redirect  
from .forms import MenusForm  
from .models import Menus 
from django_nextjs.render import render_nextjs_page_sync
# Create your views here.  
def create(request):  
    if request.method == "POST":  
        form = MenusForm(request.POST)  
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('/show')  
            except:  
                pass  
    else:  
        form = MenusForm()  
    return render(request,'index.html',{'form':form})  
def show(request):  
    menus = Menus.objects.all()  
    return render(request,"show.html",{'employees':menus})  
def edit(request, id):  
    menus = Menus.objects.get(id=id)  
    return render(request,'edit.html', {'employee':menus})  
def update(request, id):  
    menus = Menus.objects.get(id=id)  
    form = MenusForm(request.POST, instance = menus)  
    if form.is_valid():  
        form.save()  
        return redirect("/show")  
    return render(request, 'edit.html', {'employee': menus})  
def delete(request, id):  
    menus = Menus.objects.get(id=id)  
    menus.delete()  
    return redirect("/show")  
 

def index(request):
    return render_nextjs_page_sync(request)