import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import { userRecipeFavoriteActions } from '../actions/userActions';

const RecipeResults = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [showPopover, setShowPopover] = useState(false);

    const recipeResults = useSelector(state => state.recipeResults);
    const recipeResultsPage = useSelector(state => state.recipeResultsPage);
    const user = useSelector(state => state.user);

    const endIdx = (recipeResultsPage.page + 1) * 10;
    const startIdx = endIdx - 10;

    const popover = (result) => {
        return (
            <Popover>
                <Popover.Header as="h3">Warning!</Popover.Header>
                <Popover.Body>
                    Favoriting a recipe will add it to your cookbook. Are you sure?
                </Popover.Body>
                <Stack direction='horizontal' gap={2}>
                    <Button variant='outline-primary' className='ms-auto mb-2' onClick={() => dispatchRecipeFavoriteActions(result)}>Ok</Button>
                    <Button variant='outline-secondary' className='mb-2 me-1' onClick={() => setShowPopover(false)}>Cancel</Button>
                </Stack>
            </Popover>
        );
    }

    const dispatchRecipeFavoriteActions = (result) => {
        dispatch(userRecipeFavoriteActions(user.data.id, result.id, result.title, result.image));
    }

    const getComponent = (result) => {
        if (user.userLoggedIn) {
            return (
                <div id='recipe-actions-container'>
                    <Button variant='primary' onClick={() => navigate(`/recipes/${result.id}`)}>Explore Recipe</Button>
                    {
                        user.data.recipes && user.data.recipes.map(recipe => recipe.recipeId).includes(result.id) 
                            ? <i className='fa-solid fa-heart fa-2x'></i> 
                            : (
                                <OverlayTrigger show={showPopover} trigger="click" placement="top" overlay={popover(result)}>
                                    <i className='fa-regular fa-heart fa-2x' onClick={() => setShowPopover(true)}></i>
                                </OverlayTrigger>
                            )
                    }
                </div>
            );
        } else { 
            return (
                <Button variant='primary' onClick={() => navigate(`/recipes/${result.id}`)}>Explore Recipe</Button>
            );
        }
    }

    return (
        <>
            {recipeResults.results.slice(startIdx, endIdx).map((result, idx) => 
                <Card className='recipe-result' style={{ width: '30rem' }} key={idx}>
                    <Card.Img variant='top' src={result.image} />
                    <Card.Body>
                        <Card.Title>{result.title}</Card.Title>
                        {getComponent(result)}
                    </Card.Body>
                </Card>
            )}
        </>
    );
}

export default RecipeResults;
