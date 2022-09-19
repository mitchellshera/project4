
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("posts", views.new_post, name="new_post"),
    path("profile", views.profile, name="profile"),
    path("following", views.following, name="following"),

    path("spec_post/<int:num>", views.spec_post, name="spec_post"),
    path("ajax/edit_post/", views.edit_post, name='edit_post'),
    path("ajax/like_post/", views.like_post, name='like_post'),

]
