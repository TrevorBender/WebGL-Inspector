(function () {
    var resources = glinamespace("gli.capture.data.resources");
    
    var Framebuffer = function Framebuffer(resourceCache, rawArgs, target, stack) {
        glisubclass(resources.Resource, this, [resourceCache, rawArgs, target, stack, "Framebuffer"]);
        this.creationOrder = 3;
    };
    
    Framebuffer.getTracked = function getTracked(gl, args) {
        // only FRAMEBUFFER
        var bindingEnum = gl.FRAMEBUFFER_BINDING;
        var target = gl.getParameter(bindingEnum);
        if (target) {
            return target.tracked;
        } else {
            return null;
        }
    };
    
    Framebuffer.setupCaptures = function setupCaptures(impl) {
        var methods = impl.methods;
        var buildRecorder = resources.Resource.buildRecorder;
        
        var resetCalls = [
        ];
        
        buildRecorder(impl, "framebufferRenderbuffer", Framebuffer.getTracked, null);
        buildRecorder(impl, "framebufferTexture2D", Framebuffer.getTracked, null);
    };
    
    resources.Framebuffer = Framebuffer;
    
})();
