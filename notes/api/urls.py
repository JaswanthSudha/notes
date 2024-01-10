from django.urls import path
from . import views
urlpatterns=[
     path("notes/<pk>/",views.getNote,name="note"),
     path("notes/",views.getNotes,name="notes")
]