# Generated by Django 3.2.7 on 2022-11-30 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('next_app', '0002_menus_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='poll',
            name='Poll_no',
        ),
        migrations.AddField(
            model_name='poll',
            name='PostDate',
            field=models.DateField(null=True),
        ),
    ]
