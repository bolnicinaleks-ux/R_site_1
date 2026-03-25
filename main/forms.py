from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UserChangeForm
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django import forms
from .models import CustomUser

User = get_user_model()

class SingUpForm(UserCreationForm):
    photo_prof = forms.ImageField(help_text="Фото профиля.", required=False)
    first_name = forms.CharField(help_text="Имя пользователя.", widget=forms.TextInput(attrs={'class': 'input-field', 'placeholder': 'Имя пользователя', 'id': 'p_login'}))

    class Meta:
        model = User
        fields = ('first_name', 'username')

class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'input-field', 'placeholder': 'Логин', 'id': 'login'}))
    password = forms.CharField(widget=forms.TextInput(attrs={'type': 'password', 'class': 'input-field input-password', 'placeholder': 'Пароль', 'id': 'password'})) 

class user_update_form(UserChangeForm):

    password = None
    
    username = forms.CharField(help_text="Новое имя пользователя")

    class Meta:
        model = CustomUser
        fields = ('username', 'photo_prof')