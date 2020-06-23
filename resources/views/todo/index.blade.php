@extends('layouts.app')

 @section('content')
<h1> ok</h1>

print_r($tasks)

{{print_r($tasks)}}
@foreach($tasks as $task)

  <h1>{{$task->title}}</h1>
  <h1>{{$task->content}}</h1>
  <h1>{{$task->status}}</h1>
@endforeach
<example-component></example-component>
     <test></test>

<router-link to="/foo">Go to Foo</router-link>
<router-link to="/bar">Go to Bar</router-link>
  @endsection
