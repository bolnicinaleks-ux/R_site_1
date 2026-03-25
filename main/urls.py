from django.urls import path
from . import views
from .views import sign_site, login_view
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import ListView

urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', sign_site, name='signup'),
    path('login_RS/', login_view, name='login_RS'),
    path('accounts/profile/',views.profile, name='profile'),
    path('logout_RS', views.logout_view, name='logout_RS'),
    path('index', views.index, name='index'),
    path('basket', views.basket, name='basket'),
    path('kartochka_tovara/<int:tovar_id>/', views.index_detail.as_view(), name='kartochka_tovara_id'),
    path('profile_detail/', views.profile_detail, name='profile_detail'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)