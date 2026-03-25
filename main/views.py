from django.shortcuts import render, redirect, get_object_or_404
from .models import kartochka_tovara
from django.contrib.auth import login, authenticate
from .forms import SingUpForm, LoginForm
from django.contrib.auth import logout
from . import models
from django.views.generic import DetailView

def index(request):
    kartochka_tovara_list = kartochka_tovara.objects.all()
    kartochka_tovara_count = kartochka_tovara.objects.all().count()
    context = {'kartochka_tovara_list': kartochka_tovara_list, 'kartochka_tovara_count': kartochka_tovara_count}
    return render(request, 'index.html', context)

def sign_site(request):
    if request.method == 'POST':
        form = SingUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')
    else:
        form = SingUpForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    form2 = SingUpForm()
    form = LoginForm(data=request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')
    return render(request, 'login_RS.html', {'form': form, 'form2': form2})

def profile(request):
    photo = models.CustomUser.objects.all()
    context = {'photo': photo}
    return render(request, "profile.html")

def logout_view(request):
    logout(request)
    return render(request, 'index.html')

def basket(request):
    return render(request, 'basket.html')

class index_detail(DetailView):
    model = kartochka_tovara
    template_name = 'index_detail.html'
    pk_url_kwarg = 'tovar_id'
    kartochka_tovara_list = kartochka_tovara.objects.all()

def profile_detail(request):
    User = models.CustomUser.objects.all()
    context = {'User': User}
    return render(request, 'profile_datail.html')