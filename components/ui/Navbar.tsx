import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';


export const Navbar = () => {

		const { theme } = useTheme()

		return (
				<div style={{
						display: 'flex',
						width: '100%',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'start',
						padding: '0x 50px',
						backgroundColor: theme?.colors.purple800.value
				}}>
						<Image 
								src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
								alt="icono de la app"
								width={70}
								height={70}
						/>

						<NextLink href="/" passHref legacyBehavior>
								<Link>
										<Text color='white' h2>P</Text>
										<Text color='white' h3>okémon</Text>
								</Link>
						</NextLink>

						<Spacer css={{ flex: 1 }}/>
						
						<NextLink href="/favorites" passHref legacyBehavior>
								<Link css={{ marginRight: '10px' }}>
										<Text color='white'>Favoritos</Text>
								</Link>
						</NextLink>

				</div>
		)
};
