# Generated by Django 4.1.4 on 2023-01-04 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('next_app', '0008_admin'),
    ]

    operations = [
        migrations.AddField(
            model_name='admin',
            name='Username',
            field=models.CharField(default='Admin', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterModelTable(
            name='admin',
            table='Admin',
        ),
    ]