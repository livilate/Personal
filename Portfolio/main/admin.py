from django.contrib import admin
from . models import Proyecto, Perfil, Skill, Curso
# Register your models here.

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = ('Id','Nombre', 'Descripcion')

@admin.register(Perfil)
class PerfilAdmin(admin.ModelAdmin):
    list_display = ('Id', 'Mail')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('Id', 'Nombre', 'Nivel')

@admin.register(Curso)
class CursoAdmin(admin.ModelAdmin):
    list_display = ('Id', 'Nombre')