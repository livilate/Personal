from rest_framework import serializers
from .models import Proyecto, Perfil, Curso, Skill, Experiencia

class ProyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = ('Id',
                  'Nombre',
                  'Fecha',
                  'Foto',
                  'Descripcion')

class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ('Id',
                  'RazonSocial',
                  'SobreMi',
                  'Edad',
                  'Mail',
                  'Imagen',
                  'Linkedin',
                  'GitHub',
                  'FotoFondo',
                  'CV')

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ('Id',
                  'Nombre',
                  'Fecha',
                  'Certificado',
                  'Lugar')

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('Id',
                  'Nombre',
                  'Nivel',
                  'Foto')


class ExperienciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiencia
        fields = ('Id',
                  'Lugar',
                  'Desde',
                  'Hasta',
                  'Tecnologias',
                  'Referencia',
                  'Descripcion')