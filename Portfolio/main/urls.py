from django.conf.urls import url
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^get_proyectos/$', views.get_proyectos),
    url(r'^get_perfiles/$', views.get_perfiles),
    url(r'^get_skills/$', views.get_skills),
    url(r'^get_cursos/$', views.get_cursos),
    url(r'^SaveFile$', views.saveFile),
    url(r'DownloadCV/$', views.downloadCV)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_DIR)
