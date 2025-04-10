<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $teacherRole  = Role::firstOrCreate(['name' => 'Enseignant']);
        $studentRole = Role::firstOrCreate(['name' => 'Etudiant']);

        // Liste des permissions
        $permissions = [
            'create course',
            'edit course',
            'delete course',
            'view all course',
            'view details course',
            'delete course from my inscriptions',
            'register in course',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Admin premissions
        $teacherRole->givePermissionTo([
            'create course',
            'edit course',
            'delete course',
            'view all course',
            'view details course',
        ]);

        // Auteur premissions
        $studentRole->givePermissionTo([
            'delete course from my inscriptions',
            'register in course',
            'view all course',
            'view details course',
        ]);
    }
}
