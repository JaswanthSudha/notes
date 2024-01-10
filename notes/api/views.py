from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import NotesSerializer
from .models import Notes
@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)
@api_view(["GET"])
def getNotes(request):
    notes=Notes.objects.all().order_by('-updated')
    serializer=NotesSerializer(notes,many=True)
    return Response(serializer.data)
@api_view(["GET"])
def getNote(request,pk):
    notes=Notes.objects.filter(id=pk)
    note=notes.first()
    serializer=NotesSerializer(note,many=False)
    return Response(serializer.data)
@api_view(["PUT","GET"])
def updateNote(request,pk):
    data=request.data
    note=Notes.objects.get(id=pk)
    serial=NotesSerializer(instance=note,data=data)
    if serial.is_valid():
        serial.save()
    return Response(serial.data)
@api_view(["DELETE"])
def deleteNote(request,pk):
    note=Notes.objects.get(id=pk)
    note.delete()
    return Response("notes delted")
@api_view(["POST"])
def createNote(request):
    data=request.data
    note=Notes.objects.create(
        body=data['body']
    )
    serializer=NotesSerializer(note,many=False)
    return Response(serializer.data)