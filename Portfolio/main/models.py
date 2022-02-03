from django.db import models

# Create your models here.
class Proyecto(models.Model):
    Id = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=256)
    Fecha = models.DateField()
    Foto = models.FileField()
    Descripcion = models.CharField(max_length=256)


class Perfil(models.Model):
    Id = models.AutoField(primary_key=True)
    RazonSocial = models.CharField(max_length=256)
    SobreMi = models.TextField(max_length=256)
    Edad = models.IntegerField()
    Mail = models.CharField(max_length=70)
    Imagen = models.FileField()
    FotoFondo = models.FileField()
    Linkedin = models.CharField(max_length=80)
    GitHub = models.CharField(max_length=80)
    CV = models.FileField()


class Skill(models.Model):
    Id = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=50)
    Nivel = models.CharField(max_length=20)
    Foto = models.FileField()


class Experiencia(models.Model):
    Id = models.AutoField(primary_key=True)
    Lugar = models.CharField(max_length=100)
    Desde = models.DateField()
    Hasta = models.DateField()
    Tecnologias = models.CharField(max_length=256)
    Referencia = models.CharField(max_length=100, null=True)
    Descripcion = models.TextField(max_length=800)


class Curso(models.Model):
    Id = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=256)
    Fecha = models.DateField()
    Certificado = models.FileField()
    Lugar = models.CharField(max_length=30)
