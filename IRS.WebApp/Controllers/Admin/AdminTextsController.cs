using AutoMapper;
using IRS.Contracts.Texts;
using IRS.Domain.Abstractions;
using IRS.Domain.ReversWords.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IRS.WebApp.Controllers.Admin;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class AdminTextsController : ControllerBase
{
    private readonly ITextsService _service;
    private readonly IMapper _mapper;
    
    public AdminTextsController(
        ITextsService service,
        IMapper mapper)
    {
        _service = service;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetList([FromQuery] TextsListRequest request)
    {
        var entities = await _service.GetList(request.Skip, request.Take, request.IsShorthand);
        var mapped = _mapper.Map<IReadOnlyCollection<TextsDto>>(entities);

        return Ok(mapped);
    }

    [HttpPost("revers-words")]
    public async Task<IActionResult> CreateReverseWords([FromBody] CreateTexts request)
    {
        var mapped = _mapper.Map<TextEntity>(request);
        await _service.Create(mapped);
        return Ok();
    }
    
    [HttpPost("shorthand")]
    public async Task<IActionResult> CreateShorthand([FromBody] CreateTexts request)
    {
        var mapped = _mapper.Map<TextEntity>(request);
        mapped.IsShorthand = true;
        await _service.Create(mapped);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Remove([FromRoute] Guid id)
    {
        await _service.Remove(id);
        return Ok();
    }
}