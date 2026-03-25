from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse

class kartochka_tovara(models.Model):
    tovar_id = models.IntegerField(primary_key=True, auto_created=True, )
    name = models.CharField(verbose_name="Тут название энергетика", max_length=100)
    price = models.IntegerField(verbose_name="Тут цена энергетика")
    img_en = models.ImageField(verbose_name="Тут картинка энергетика", upload_to="img_en/")
    opisanie = models.CharField(verbose_name="Описание энергетика", max_length=600)
    xar = models.CharField(verbose_name="Характеристрики")

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('kartochka_tovara_id', args=[str(self.tovar_id)])
    
class CustomUser(AbstractUser):
    photo_prof = models.ImageField(verbose_name="Фото профиля", upload_to="img_en/auth/", default="img_en/auth/person-fill.svg", blank=True, null=True)
    first_name = models.CharField(verbose_name="Имя профиля", max_length=50)

    def __str__(self):
        return self.username
