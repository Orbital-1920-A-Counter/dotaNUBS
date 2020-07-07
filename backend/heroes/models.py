from django.db import models


class Heroes(models.Model):
    id = models.IntegerField(primary_key = True)
    name = models.CharField(max_length = 255, null = False)
    localized_name = models.CharField(max_length = 255, null = False)
    primary_attr = models.CharField(max_length = 255, null = False)
    attack_type = models.CharField(max_length = 255, null = False)
    roles = models.CharField(max_length = 255, null = False)
    img = models.CharField(max_length = 255, null = False)
    icon = models.CharField(max_length = 255, null = False)
    base_health = models.IntegerField(null = True)
    base_health_regen = models.IntegerField(null = True)
    base_mana = models.IntegerField(null = True)
    base_mana_regen = models.IntegerField(null = True)
    base_armor = models.IntegerField(null = True)
    base_mr = models.IntegerField(null = True)
    base_attack_min = models.IntegerField(null = True)
    base_attack_max = models.IntegerField(null = True)
    base_str = models.IntegerField(null = True)
    base_agi = models.IntegerField(null = True)
    base_int = models.IntegerField(null = True)
    str_gain = models.IntegerField(null = True)
    agi_gain = models.IntegerField(null = True)
    int_gain = models.IntegerField(null = True)
    attack_range = models.IntegerField(null = True)
    projectile_speed = models.IntegerField(null = True)
    attack_rate = models.IntegerField(null = True)
    move_speed = models.IntegerField(null = True)
    turn_rate = models.IntegerField(null = True)
    cm_enabled = models.BooleanField(null = True)
    legs = models.IntegerField()

    def __str__(self):
        skeleton = "{} - {} - {} - {}"
        return skeleton.format(self.name, self.primary_attr, self.attack_type, self.roles)