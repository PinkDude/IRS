using IRS.Database.Models;
using IRS.Domain.Identity.Constants;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace IRS.Utils.DataSeed;

public static class UsersSeed
{
    public static async Task Initialize(IServiceProvider serviceProvider, string testUserPw)
{
    var adminId = await EnsureUser(serviceProvider, testUserPw, "admin@contoso.com");
    await EnsureRole(serviceProvider, adminId, RolesConstant.AdminRole);
}

private static async Task<string> EnsureUser(IServiceProvider serviceProvider, string testUserPw, string UserName)
{
    var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

    var user = await userManager.FindByNameAsync(UserName);
    if (user == null)
    {
        user = new ApplicationUser
        {
            UserName = UserName,
            EmailConfirmed = true
        };
        await userManager.CreateAsync(user, testUserPw);
    }

    if (user == null)
    {
        throw new Exception("The password is probably not strong enough!");
    }

    return user.Id;
}

private static async Task<IdentityResult> EnsureRole(IServiceProvider serviceProvider,
                                                              string uid, string role)
{
    var roleManager = serviceProvider.GetService<RoleManager<IdentityRole>>();

    if (roleManager == null)
    {
        throw new Exception("roleManager null");
    }

    IdentityResult IR;
    if (!await roleManager.RoleExistsAsync(role))
    {
        IR = await roleManager.CreateAsync(new IdentityRole(role));
    }

    var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

    //if (userManager == null)
    //{
    //    throw new Exception("userManager is null");
    //}

    var user = await userManager.FindByIdAsync(uid);

    if (user == null)
    {
        throw new Exception("The testUserPw password was probably not strong enough!");
    }

    IR = await userManager.AddToRoleAsync(user, role);

    return IR;
}
}