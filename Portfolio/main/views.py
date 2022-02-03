from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Proyecto, Perfil, Curso, Skill, Experiencia
from .serializers import (
    ProyectoSerializer,
    PerfilSerializer,
    CursoSerializer,
    SkillSerializer,
    ExperienciaSerializer,
)
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
import os
from django.http import HttpResponse, Http404
from django.conf import settings

# Create your views here.
@csrf_exempt
def get_proyectos(request, id=0):
    if request.method == "GET":
        proyectos = Proyecto.objects.all()
        proyecto_Serializer = ProyectoSerializer(proyectos, many=True)

        return JsonResponse(proyecto_Serializer.data, safe=False)
    else:
        return JsonResponse("Ocurrio un error")


@csrf_exempt
def get_perfiles(request):
    if request.method == "GET":
        perfiles = Perfil.objects.all()
        perfiles_serializer = PerfilSerializer(perfiles, many=True)

        return JsonResponse(perfiles_serializer.data, safe=False)
    else:
        return JsonResponse("Ocurrio un error")


@csrf_exempt
def get_cursos(request):
    if request.method == "GET":
        cursos = Curso.objects.all()
        cursos_serializer = CursoSerializer(cursos, many=True)

        return JsonResponse(cursos_serializer.data, safe=False)
    else:
        return JsonResponse("Ocurrio un error")


@csrf_exempt
def get_skills(request):
    if request.method == "GET":
        skills = Skill.objects.all()
        skills_serializer = SkillSerializer(skills, many=True)

        return JsonResponse(skills_serializer.data, safe=False)
    else:
        return JsonResponse("Ocurrio un error")


@csrf_exempt
def get_experiencia(request):
    if request.method == "GET":
        experiencia = Experiencia.objects.all().order_by("Desde")
        exp_serializer = ExperienciaSerializer(experiencia, many=True)

        return JsonResponse(exp_serializer.data, safe=False)
    else:
        return JsonResponse("Ocurrio un error")


@csrf_exempt
def saveFile(request):
    file = request.FILES["uploadedFile"]
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)


@csrf_exempt
def downloadCV(request):
    if request.method == "GET":
        perfiles = list(Perfil.objects.all())

        file_path = perfiles[0].CV.path
        if os.path.exists(file_path):
            with open(file_path, "rb") as fh:
                response = HttpResponse(
                    fh.read(), content_type="application/vnd.ms-excel"
                )
                response[
                    "Content-Disposition"
                ] = "inline; filename=" + os.path.basename(file_path)
                return JsonResponse(response, safe=False)
        raise Http404
    else:
        return JsonResponse("Ocurrio un error")
