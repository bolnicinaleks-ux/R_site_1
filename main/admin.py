from django.contrib import admin
from .models import kartochka_tovara
from . import models

admin.site.register(kartochka_tovara)
class kartochka_tovaraAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "img_en")

admin.site.register(models.CustomUser)
class CastomUsersAdmin(admin.ModelAdmin):
    list_display = ("photo_prof")