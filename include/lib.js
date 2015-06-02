/*
   Resolved library functions
*/

function defineLibraryFuncs()
{
	// FW 3.36 library functions' offsets.
	sceLibcFcns_v336 =
	{
		time: 0x000006e9,
	}
	
	version_deps =
	{
		v3_36:
		{
			"SceWebKit":        
			{
				gadgets:
				{
					ldmr1_1: 0x8c004,      // ldm	r1, {r0, r1, r3, r4, r9, fp, ip, pc}
					ldmr1_2: 0x649cc4,     // ldm	r1, {r0, r1, r2, r4, ip, lr, pc}
					ldmr4_1: 0x2e340c,     // ldm	r4, {r1, ip, lr, pc}
					ldmr1_3: 0x295dc,      // ldm	r1, {r1, r4, ip, lr, pc}
					strr0: 0x127e20 | 1,   // str	r0, [r1, #0]; bx lr
					ldmr4_2: 0x42dd4       // ldm	r4, {r0, ip, lr, pc}
				},
				functions: {}
			},
			"SceLibc":
			{
				functions: sceLibcFcns_v336,
				gadgets : 
				{
					scesetjmp : 0x13df0 | 1,
					scelongjmp : 0x13e18 | 1
				}
			}
		}
	};
}