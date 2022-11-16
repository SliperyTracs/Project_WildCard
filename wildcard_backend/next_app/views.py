from django.shortcuts import redirect, render
from django_nextjs.render import render_nextjs_page_sync
from .forms import MenusForm
from .models import Menus


# Create your views here.  
def emp(request):  
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
    return render(request,"show.html",{'menus':menus})  
def edit(request, id):  
    menu = Menus.objects.get(id=id)  
    return render(request,'edit.html', {'menu':menu})  
def update(request, id):  
    menu = Menus.objects.get(id=id)  
    form = MenusForm(request.POST, instance = menu)  
    if form.is_valid():  
        form.save()  
        return redirect("/show")  
    return render(request, 'edit.html', {'menu': menu})  
def destroy(request, id):  
    menus = Menus.objects.get(id=id)  
    menus.delete()  
    return redirect("/show")  

def index(request):
    return render_nextjs_page_sync(request)